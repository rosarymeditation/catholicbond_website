import { headers } from "next/headers";
import { redirect } from "next/navigation";

const CONFIG = {
    android: "https://play.google.com/store/apps/details?id=com.catholicdatings.app",
    ios: "https://apps.apple.com/gb/app/catholicbond-catholic-dating/id6745515223",
    fallback: "https://play.google.com/store/apps/details?id=com.catholicdatings.app",
};

export default async function GoPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
    const headersList = await headers();
    const ua = headersList.get("user-agent") || "";

    const isAndroid = /android/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);

    let destination = CONFIG.fallback;
    if (isAndroid) destination = CONFIG.android;
    else if (isIOS) destination = CONFIG.ios;

    const url = new URL(destination);
    const params = await searchParams;
    for (const [key, value] of Object.entries(params)) {
        if (typeof value === "string") url.searchParams.set(key, value);
    }

    redirect(url.toString());
}