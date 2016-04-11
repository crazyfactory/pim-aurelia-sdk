System.register(['../pim-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var pim_base_1;
    var PieceGroupsController;
    return {
        setters:[
            function (pim_base_1_1) {
                pim_base_1 = pim_base_1_1;
            }],
        execute: function() {
            PieceGroupsController = (function (_super) {
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
            }(pim_base_1.PimBase.ApiController));
            exports_1("PieceGroupsController", PieceGroupsController);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFBMkMseUNBQXFCO2dCQUFoRTtvQkFBMkMsOEJBQXFCO2dCQXlCaEUsQ0FBQztnQkF4QmlCLDRCQUFNLEdBQXBCLFVBQXFCLElBQXFCO29CQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFYSw0QkFBTSxHQUFwQixVQUFxQixFQUFVO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFYSx5QkFBRyxHQUFqQixVQUFrQixFQUFVO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsRUFBSSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRWEsNEJBQU0sR0FBcEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFYSwrQkFBUyxHQUF2QixVQUF3QixJQUFZO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBMkIsSUFBTSxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRWEsNEJBQU0sR0FBcEIsVUFBcUIsSUFBcUI7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVMLDRCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsQ0F6QjBDLGtCQUFPLENBQUMsYUFBYSxHQXlCL0Q7WUF6QkQseURBeUJDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VHcm91cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgNC84LzIwMTYgMTQ6MjU6MzNcclxuKi9cclxuXHJcbi8qIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiAqL1xyXG5cclxuaW1wb3J0IHtQaW1CYXNlfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBpZWNlR3JvdXBEYXRhfSBmcm9tICcuLi9waW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cHNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElQaWVjZUdyb3VwRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2Vncm91cHNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIERlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvcGllY2Vncm91cHNgLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWdyb3Vwcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QWxsKCk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWdyb3Vwc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnlDb2RlKGNvZGU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSVBpZWNlR3JvdXBEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLyogRW5kIG9mIGZpbGUgKi9cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
