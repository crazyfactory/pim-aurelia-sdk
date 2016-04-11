"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
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
}(pim_base_1.ApiController));
exports.PieceGroupTypesController = PieceGroupTypesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFPQSx5QkFBNEIsYUFBYSxDQUFDLENBQUE7QUFHMUM7SUFBK0MsNkNBQWE7SUFBNUQ7UUFBK0MsOEJBQWE7SUFxQjVELENBQUM7SUFwQmlCLGdDQUFNLEdBQXBCLFVBQXFCLElBQXlCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFYSxnQ0FBTSxHQUFwQixVQUFxQixFQUFVO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFYSw2QkFBRyxHQUFqQixVQUFrQixFQUFVO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF1QixFQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRWEsaUNBQU8sR0FBckI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFYSxnQ0FBTSxHQUFwQixVQUFxQixJQUF5QjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUwsZ0NBQUM7QUFBRCxDQXJCQSxBQXFCQyxDQXJCOEMsd0JBQWEsR0FxQjNEO0FBckJZLGlDQUF5Qiw0QkFxQnJDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VHcm91cFR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgICA0LzExLzIwMTYgMTE6MDQ6MTNcclxuKi9cclxuXHJcbmltcG9ydCB7QXBpQ29udHJvbGxlcn0gZnJvbSAnLi4vcGltLWJhc2UnO1xyXG5pbXBvcnQge0lQaWVjZUdyb3VwVHlwZURhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3VwVHlwZXNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJUGllY2VHcm91cFR5cGVEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2Vncm91cHR5cGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHR5cGVzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMaXN0KCk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHR5cGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvcGllY2Vncm91cHR5cGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
