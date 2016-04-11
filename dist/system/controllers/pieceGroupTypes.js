System.register(['../pim-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var pim_base_1;
    var PieceGroupTypesController;
    return {
        setters:[
            function (pim_base_1_1) {
                pim_base_1 = pim_base_1_1;
            }],
        execute: function() {
            PieceGroupTypesController = (function (_super) {
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
            exports_1("PieceGroupTypesController", PieceGroupTypesController);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQStDLDZDQUFhO2dCQUE1RDtvQkFBK0MsOEJBQWE7Z0JBcUI1RCxDQUFDO2dCQXBCaUIsZ0NBQU0sR0FBcEIsVUFBcUIsSUFBeUI7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVhLGdDQUFNLEdBQXBCLFVBQXFCLEVBQVU7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVhLDZCQUFHLEdBQWpCLFVBQWtCLEVBQVU7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF1QixFQUFJLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFYSxpQ0FBTyxHQUFyQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVhLGdDQUFNLEdBQXBCLFVBQXFCLElBQXlCO29CQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFTCxnQ0FBQztZQUFELENBckJBLEFBcUJDLENBckI4Qyx3QkFBYSxHQXFCM0Q7WUFyQkQsaUVBcUJDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VHcm91cFR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgICA0LzExLzIwMTYgMTE6MDQ6MTNcclxuKi9cclxuXHJcbmltcG9ydCB7QXBpQ29udHJvbGxlcn0gZnJvbSAnLi4vcGltLWJhc2UnO1xyXG5pbXBvcnQge0lQaWVjZUdyb3VwVHlwZURhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3VwVHlwZXNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJUGllY2VHcm91cFR5cGVEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2Vncm91cHR5cGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHR5cGVzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMaXN0KCk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHR5cGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvcGllY2Vncm91cHR5cGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
