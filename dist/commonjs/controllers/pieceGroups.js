"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
var PieceGroupsController = (function (_super) {
    __extends(PieceGroupsController, _super);
    function PieceGroupsController() {
        _super.apply(this, arguments);
    }
    PieceGroupsController.Create = function (data) {
        return this.put("api/piecegroups", data);
    };
    PieceGroupsController.Delete = function (id) {
        return this.delete("api/piecegroups", null);
    };
    PieceGroupsController.Get = function (id) {
        return this.get("api/piecegroups/" + id);
    };
    PieceGroupsController.GetAll = function () {
        return this.get("api/piecegroups");
    };
    PieceGroupsController.GetByCode = function (code) {
        return this.get("api/piecegroups/by-code/" + code);
    };
    PieceGroupsController.Update = function (data) {
        return this.patch("api/piecegroups", data);
    };
    return PieceGroupsController;
}(pim_base_1.ApiController));
exports.PieceGroupsController = PieceGroupsController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BLHlCQUE0QixhQUFhLENBQUMsQ0FBQTtBQUcxQztJQUEyQyx5Q0FBYTtJQUF4RDtRQUEyQyw4QkFBYTtJQXlCeEQsQ0FBQztJQXhCaUIsNEJBQU0sR0FBcEIsVUFBcUIsSUFBcUI7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVhLDRCQUFNLEdBQXBCLFVBQXFCLEVBQVU7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVhLHlCQUFHLEdBQWpCLFVBQWtCLEVBQVU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQW1CLEVBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFYSw0QkFBTSxHQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVhLCtCQUFTLEdBQXZCLFVBQXdCLElBQVk7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTJCLElBQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFYSw0QkFBTSxHQUFwQixVQUFxQixJQUFxQjtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUwsNEJBQUM7QUFBRCxDQXpCQSxBQXlCQyxDQXpCMEMsd0JBQWEsR0F5QnZEO0FBekJZLDZCQUFxQix3QkF5QmpDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VHcm91cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgIDQvMTEvMjAxNiAxMTowNDoxM1xyXG4qL1xyXG5cclxuaW1wb3J0IHtBcGlDb250cm9sbGVyfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBpZWNlR3JvdXBEYXRhfSBmcm9tICdwaW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cHNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJUGllY2VHcm91cERhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL3BpZWNlZ3JvdXBzYCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEFsbCgpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL3BpZWNlZ3JvdXBzL2J5LWNvZGUvJHtjb2RlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBkYXRlKGRhdGE6IElQaWVjZUdyb3VwRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2goYGFwaS9waWVjZWdyb3Vwc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogRW5kIG9mIGZpbGUgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
