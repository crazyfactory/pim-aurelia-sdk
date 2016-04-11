"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
var PieceAttributesController = (function (_super) {
    __extends(PieceAttributesController, _super);
    function PieceAttributesController() {
        _super.apply(this, arguments);
    }
    PieceAttributesController.AddValue = function (key, value) {
        return this.put("api/pieceattributes/" + key + "/values", value);
    };
    PieceAttributesController.DeleteValue = function (key, value) {
        return this.delete("api/pieceattributes/" + key + "/values", value);
    };
    PieceAttributesController.Get = function (key) {
        return this.get("api/pieceattributes/" + key);
    };
    PieceAttributesController.GetAll = function () {
        return this.get("api/pieceattributes");
    };
    PieceAttributesController.Update = function (key, data) {
        return this.patch("api/pieceattributes/" + key, data);
    };
    return PieceAttributesController;
}(pim_base_1.PimBase.ApiController));
exports.PieceAttributesController = PieceAttributesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlQXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFTQSx5QkFBc0IsYUFBYSxDQUFDLENBQUE7QUFHcEM7SUFBK0MsNkNBQXFCO0lBQXBFO1FBQStDLDhCQUFxQjtJQXFCcEUsQ0FBQztJQXBCaUIsa0NBQVEsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEtBQWE7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXVCLEdBQUcsWUFBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFYSxxQ0FBVyxHQUF6QixVQUEwQixHQUFXLEVBQUUsS0FBYTtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBdUIsR0FBRyxZQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVhLDZCQUFHLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXVCLEdBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFYSxnQ0FBTSxHQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVhLGdDQUFNLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxJQUF5QjtRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBdUIsR0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTCxnQ0FBQztBQUFELENBckJBLEFBcUJDLENBckI4QyxrQkFBTyxDQUFDLGFBQWEsR0FxQm5FO0FBckJZLGlDQUF5Qiw0QkFxQnJDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VBdHRyaWJ1dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgIDQvOC8yMDE2IDE0OjI1OjMzXHJcbiovXHJcblxyXG4vKiBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC4gKi9cclxuXHJcbmltcG9ydCB7UGltQmFzZX0gZnJvbSAnLi4vcGltLWJhc2UnO1xyXG5pbXBvcnQge0lQaWVjZUF0dHJpYnV0ZURhdGF9IGZyb20gJy4uL3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUF0dHJpYnV0ZXNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQWRkVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9L3ZhbHVlc2AsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIERlbGV0ZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fS92YWx1ZXNgLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRBbGwoKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVwZGF0ZShrZXk6IHN0cmluZywgZGF0YTogSVBpZWNlQXR0cmlidXRlRGF0YSk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fWAsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
