declare namespace NodeJS {
	interface ProcessEnv {
		readonly FOO: string;
		readonly NEXT_PUBLIC_EMAILJS_USER_ID: string;
		readonly NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
		readonly NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
		readonly NEXT_PUBLIC_MICROCMS_API_KEY: string;
		readonly NEXT_PUBLIC_MICROCMS_DOMAIN: string;
	}
}
