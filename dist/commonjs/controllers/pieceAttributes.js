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
}(pim_base_1.ApiController));
exports.PieceAttributesController = PieceAttributesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlQXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFPQSx5QkFBNEIsYUFBYSxDQUFDLENBQUE7QUFHMUM7SUFBK0MsNkNBQWE7SUFBNUQ7UUFBK0MsOEJBQWE7SUFxQjVELENBQUM7SUFwQmlCLGtDQUFRLEdBQXRCLFVBQXVCLEdBQVcsRUFBRSxLQUFhO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFHLFlBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRWEscUNBQVcsR0FBekIsVUFBMEIsR0FBVyxFQUFFLEtBQWE7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXVCLEdBQUcsWUFBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFYSw2QkFBRyxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRWEsZ0NBQU0sR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFYSxnQ0FBTSxHQUFwQixVQUFxQixHQUFXLEVBQUUsSUFBeUI7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXVCLEdBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUwsZ0NBQUM7QUFBRCxDQXJCQSxBQXFCQyxDQXJCOEMsd0JBQWEsR0FxQjNEO0FBckJZLGlDQUF5Qiw0QkFxQnJDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VBdHRyaWJ1dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgICA0LzExLzIwMTYgMTE6MDQ6MTNcclxuKi9cclxuXHJcbmltcG9ydCB7QXBpQ29udHJvbGxlcn0gZnJvbSAnLi4vcGltLWJhc2UnO1xyXG5pbXBvcnQge0lQaWVjZUF0dHJpYnV0ZURhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUF0dHJpYnV0ZXNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fS92YWx1ZXNgLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX0vdmFsdWVzYCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QWxsKCk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoa2V5OiBzdHJpbmcsIGRhdGE6IElQaWVjZUF0dHJpYnV0ZURhdGEpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX1gLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
