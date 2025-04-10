import {Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis} from "@workspace/ui/components/breadcrumb"
import React from "react";
import type { ReactElement } from "react";
 
export default async  function BreadcrumbSlot({
	params,
}: { params: Promise<{ all: string[] }> }) {
	const breadcrumbItems: ReactElement[] = [];
    
	let breadcrumbPage: ReactElement = <></>;
    const {all} = await params;
	all.shift(); // remove the first element which is the locale
	for (let i = 0; i < all.length; i++) {
		const route = all[i];
		const href = `/${all.slice(1, i + 1).join("/")}`;
		if (i === all.length - 1) {
			breadcrumbPage = (
				<BreadcrumbItem>
					<BreadcrumbPage className="capitalize">{route}</BreadcrumbPage>
				</BreadcrumbItem>
			);
		} else {
			breadcrumbItems.push(
				<React.Fragment key={href}>
					<BreadcrumbItem>
						<BreadcrumbLink href={href} className="capitalize">
							{route}
						</BreadcrumbLink>
					</BreadcrumbItem>
				</React.Fragment>,
			);
		}
	}
 
	return (
		<Breadcrumb className="mb-4">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				{breadcrumbItems}
				<BreadcrumbSeparator />
				{breadcrumbPage}
			</BreadcrumbList>
		</Breadcrumb>
	);
}