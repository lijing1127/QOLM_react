import { observable, action, runInAction } from "mobx";
import cookie from "js-cookie";

class Comment {
	@observable Currname={
		name: "",
	};
	
	@action async getCurr(url){
		const CurrName =await fetch(url, {
			mode: "cors",
			method: "GET",
			headers: {"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Headers": "Authorization",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
				"Access-Authorization": `${cookie.get("access_token")}`},
		}).then( function(response) {
			return response.json();
		}).then( function(jsonData) {
			return jsonData;
		}).catch( function() {
			alert("出现错误!");
		});

		runInAction("request success", () => {
			this.Currname.name=CurrName.name;
		});
	}

	@action async postComment(url,data){
		fetch(url, {
			mode: "cors",
			method: "POST",
			headers: {"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Headers": "Authorization",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
				"Access-Authorization": `${cookie.get("access_token")}`},
			body:data,
		}).then( function(response) {
			return response.json();
		}).then( function(jsonData) {
			return jsonData;
		}).catch( function() {
			alert("出现错误!");
		});
	}
}

export default new Comment();
	