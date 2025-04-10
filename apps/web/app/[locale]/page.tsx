import HomeSearch from "@/components/home/search"
import { HomeSlider } from "@/components/home/slider"
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params
  return (
    <div className="">
      <HomeSlider/>
      <HomeSearch/>
    </div>
  ) 
}
