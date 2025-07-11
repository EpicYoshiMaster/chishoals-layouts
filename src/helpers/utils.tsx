import { Butterfly, DiscordLogo, Question, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import React from "react";

export const formatTimeHMSC = (ms: number): string => {
	ms = ms > 0 ? ms : 0;

	const hour = Math.floor(ms / 60 / 60 / 1000);
	ms = ms % (60 * 60 * 1000);

	const minute = Math.floor(ms / 60 / 1000);
	ms = ms % (60 * 1000);

	const second = Math.floor(ms / 1000);
	ms = ms % 1000;

	const centiseconds = Math.floor(ms / 10);

	return `${hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}.${centiseconds < 10 ? `0${centiseconds}` : centiseconds}`
}

export const formatDateHM = (date: Date) => {
	return date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
};

export const formatDateMDY = (date: Date) => {
	return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}

export const getSocialPlatformIcon = (platform: string) => {
	switch(platform) {
		case "Bluesky": return ( <Butterfly/> );
		case "YouTube": return ( <YoutubeLogo /> );
		case "Twitter": return ( <TwitterLogo /> );
		case "Discord": return ( <DiscordLogo /> );
	}

	return ( <Question /> );
}

export const getImagePath = (bundle: string, imagePath: string) => {
	return `\\bundles\\${bundle}\\images\\${imagePath}`;
}