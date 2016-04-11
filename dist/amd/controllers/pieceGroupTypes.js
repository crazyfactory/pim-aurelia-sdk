var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../pim-base'], function (require, exports, pim_base_1) {
    "use strict";
    var PieceGroupTypesController = (function (_super) {
        __extends(PieceGroupTypesController, _super);
        function PieceGroupTypesController() {
            _super.apply(this, arguments);
        }
        PieceGroupTypesController.Create = function (data) {
            return this.put("api/piecegrouptypes", data);
        };
        PieceGroupTypesController.Delete = function (id) {
            return this.delete("api/piecegrouptypes", id);
        };
        PieceGroupTypesController.Get = function (id) {
            return this.get("api/piecegrouptypes/" + id);
        };
        PieceGroupTypesController.GetList = function () {
            return this.get("api/piecegrouptypes");
        };
        PieceGroupTypesController.Update = function (data) {
            return this.patch("api/piecegrouptypes", data);
        };
        return PieceGroupTypesController;
    }(pim_base_1.PimBase.ApiController));
    exports.PieceGroupTypesController = PieceGroupTypesController;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBWUE7UUFBK0MsNkNBQXFCO1FBQXBFO1lBQStDLDhCQUFxQjtRQXFCcEUsQ0FBQztRQXBCaUIsZ0NBQU0sR0FBcEIsVUFBcUIsSUFBeUI7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVhLGdDQUFNLEdBQXBCLFVBQXFCLEVBQVU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVhLDZCQUFHLEdBQWpCLFVBQWtCLEVBQVU7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXVCLEVBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFYSxpQ0FBTyxHQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVhLGdDQUFNLEdBQXBCLFVBQXFCLElBQXlCO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFTCxnQ0FBQztJQUFELENBckJBLEFBcUJDLENBckI4QyxrQkFBTyxDQUFDLGFBQWEsR0FxQm5FO0lBckJZLGlDQUF5Qiw0QkFxQnJDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VHcm91cFR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgIDQvOC8yMDE2IDE0OjI1OjMzXHJcbiovXHJcblxyXG4vKiBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC4gKi9cclxuXHJcbmltcG9ydCB7UGltQmFzZX0gZnJvbSAnLi4vcGltLWJhc2UnO1xyXG5pbXBvcnQge0lQaWVjZUdyb3VwVHlwZURhdGF9IGZyb20gJy4uL3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3VwVHlwZXNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElQaWVjZUdyb3VwVHlwZURhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIERlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvcGllY2Vncm91cHR5cGVzYCwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWdyb3VwdHlwZXMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldExpc3QoKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWdyb3VwdHlwZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVwZGF0ZShkYXRhOiBJUGllY2VHcm91cFR5cGVEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2goYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG5cclxuLyogRW5kIG9mIGZpbGUgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
