import { HttpClient, json } from 'aurelia-fetch-client';
import 'fetch';
export class ApiController {
    static get baseUrl() {
        return this._baseUrl;
    }
    static set baseUrl(value) {
        this._baseUrl = value;
        this._http = null;
    }
    static get http() {
        if (!this._http) {
            this._http = new HttpClient();
            this._http.configure(config => config
                .useStandardConfiguration()
                .withBaseUrl(ApiController._baseUrl));
        }
        return this._http;
    }
    static fetch(method, url, data = undefined) {
        return this.http
            .fetch(url, {
            method: method,
            body: json(data)
        })
            .then(response => response.json());
    }
    static get(url) {
        return this.fetch("get", url);
    }
    static post(url, data) {
        return this.fetch("post", url, data);
    }
    static patch(url, data) {
        return this.fetch("patch", url, data);
    }
    static delete(url, data) {
        return this.fetch("delete", url, data);
    }
    static put(url, data) {
        return this.fetch("put", url, data);
    }
    static head(url, data) {
        return this.fetch("head", url, data);
    }
}
ApiController._baseUrl = 'http://localhost:5000/api/';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxNQUFNLHNCQUFzQjtPQUM5QyxPQUFPO0FBRWQ7SUFNQyxXQUFrQixPQUFPO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFrQixPQUFPLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBcUIsSUFBSTtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQzFCLE1BQU07aUJBQ0osd0JBQXdCLEVBQUU7aUJBQzFCLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQ3JDLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQWlCLEtBQUssQ0FBQyxNQUFhLEVBQUUsR0FBVSxFQUFFLElBQUksR0FBTyxTQUFTO1FBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2hCLENBQUM7YUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFpQixHQUFHLENBQUMsR0FBVTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE9BQWlCLElBQUksQ0FBQyxHQUFVLEVBQUUsSUFBUTtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFpQixLQUFLLENBQUMsR0FBVSxFQUFFLElBQVE7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBaUIsTUFBTSxDQUFDLEdBQVUsRUFBRSxJQUFRO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQWlCLEdBQUcsQ0FBQyxHQUFVLEVBQUUsSUFBUTtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFpQixJQUFJLENBQUMsR0FBVSxFQUFFLElBQVE7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0FBQ0YsQ0FBQztBQXZEZSxzQkFBUSxHQUFXLDRCQUE0QixDQXVEOUQiLCJmaWxlIjoicGltLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaUNvbnRyb2xsZXIge1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBfaHR0cDogSHR0cENsaWVudDtcclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgX2Jhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyc7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGJhc2VVcmwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmFzZVVybDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2V0IGJhc2VVcmwodmFsdWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fYmFzZVVybCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5faHR0cCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIGdldCBodHRwKCk6SHR0cENsaWVudCB7XHJcblx0XHRpZiAoIXRoaXMuX2h0dHApIHtcclxuXHRcdFx0dGhpcy5faHR0cCA9IG5ldyBIdHRwQ2xpZW50KCk7XHJcblx0XHRcdHRoaXMuX2h0dHAuY29uZmlndXJlKGNvbmZpZyA9PlxyXG5cdFx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcblx0XHRcdFx0XHQud2l0aEJhc2VVcmwoQXBpQ29udHJvbGxlci5fYmFzZVVybClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBmZXRjaChtZXRob2Q6c3RyaW5nLCB1cmw6c3RyaW5nLCBkYXRhOmFueSA9IHVuZGVmaW5lZCk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmZldGNoKHVybCwge1xyXG5cdFx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRcdGJvZHk6IGpzb24oZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgZ2V0KHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImdldFwiLCB1cmwpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIHBhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJwYXRjaFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBkZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBwdXQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBoZWFkKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJoZWFkXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
