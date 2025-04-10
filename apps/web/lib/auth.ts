import NextAuth,{type NextAuthResult} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { AuthApi} from "@workspace/api/api"
import { AuthEmailLoginDto } from "@workspace/api/models"

export const authInstance  = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email && !credentials?.password) {
                    return null
                }
                const api = new AuthApi( { basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL })
                try {
                    const body: AuthEmailLoginDto = {
                        email: credentials?.email as string,
                        password: credentials?.password as string
                    }
                    const res = await api.authControllerLoginV1(body,{
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    if (res.status === 200 && res.data) {
                        const user = res.data
                        return {
                            id: user.user.id.toString(),
                            name: user.user.firstName,
                            email: user.user.email,
                            access_token: user.token,
                            refresh_token: user.refreshToken,
                            expires_at: user.tokenExpires
                        }
                    } else {
                        return null
                    }
                } catch (error) {
                    return null
                }
            },
            
        })
    ],
    callbacks: {
        
        authorized: async ({ auth }) => {
            return !!auth
        }
    }
})
export const handlers = authInstance.handlers;
export const signIn: NextAuthResult["signIn"] = authInstance.signIn;
export const signOut: NextAuthResult["signOut"] = authInstance.signOut;
export const auth: NextAuthResult['auth'] = authInstance.auth;
