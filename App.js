import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();
export default function App() {
	const [loggedIn, setLoggedIn] = useState("");
	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId:
			"25192002304-kbuq5gdp9reoherppu02jhs9co9clo7b.apps.googleusercontent.com",
		webClientId:
			"25192002304-ui6nd24pep5da06d3u7qctcjhp607b9q.apps.googleusercontent.com",
		androidClientId:
			"25192002304-kbuq5gdp9reoherppu02jhs9co9clo7b.apps.googleusercontent.com",
		iosClientId:
			"25192002304-kbuq5gdp9reoherppu02jhs9co9clo7b.apps.googleusercontent.com",
	});

	useEffect(() => {
		if (response?.type === "success") {
			const { authentication, type } = response;
			setLoggedIn(type);
			
		}
	}, [response]);
	return (
		<View style={styles.container}>
			<Button
				disabled={!request}
				title="login"
				onPress={() => {
					promptAsync();
				}}
			/>
			<Text>{loggedIn === "success" ? "loggedIn" : "loggedOut"}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
