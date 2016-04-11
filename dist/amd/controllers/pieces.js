var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../pim-base'], function (require, exports, pim_base_1) {
    "use strict";
    var PiecesController = (function (_super) {
        __extends(PiecesController, _super);
        function PiecesController() {
            _super.apply(this, arguments);
        }
        PiecesController.Count = function (data) {
            return this.head("api/pieces", data);
        };
        PiecesController.Create = function (data) {
            return this.put("api/pieces", data);
        };
        PiecesController.Delete = function (id) {
            return this.delete("api/pieces", id);
        };
        PiecesController.Find = function (data) {
            return this.post("api/pieces", data);
        };
        PiecesController.Get = function (id) {
            return this.get("api/pieces/" + id);
        };
        PiecesController.GetByCode = function (code) {
            return this.get("api/pieces/by-code/" + code);
        };
        PiecesController.Update = function (data) {
            return this.patch("api/pieces", data);
        };
        return PiecesController;
    }(pim_base_1.PimBase.ApiController));
    exports.PiecesController = PiecesController;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBWUE7UUFBc0Msb0NBQXFCO1FBQTNEO1lBQXNDLDhCQUFxQjtRQTZCM0QsQ0FBQztRQTVCaUIsc0JBQUssR0FBbkIsVUFBb0IsSUFBd0I7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFYSx1QkFBTSxHQUFwQixVQUFxQixJQUFnQjtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVhLHVCQUFNLEdBQXBCLFVBQXFCLEVBQVU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFYSxxQkFBSSxHQUFsQixVQUFtQixJQUF3QjtZQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVhLG9CQUFHLEdBQWpCLFVBQWtCLEVBQVU7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWMsRUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVhLDBCQUFTLEdBQXZCLFVBQXdCLElBQVk7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXNCLElBQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFYSx1QkFBTSxHQUFwQixVQUFxQixJQUFnQjtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVMLHVCQUFDO0lBQUQsQ0E3QkEsQUE2QkMsQ0E3QnFDLGtCQUFPLENBQUMsYUFBYSxHQTZCMUQ7SUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9waWVjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgNC84LzIwMTYgMTQ6MjU6MzRcclxuKi9cclxuXHJcbi8qIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiAqL1xyXG5cclxuaW1wb3J0IHtQaW1CYXNlfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBhZ2VkUmVzdWx0RGF0YSwgSVBpZWNlRGF0YSwgSVBpZWNlU2VsZWN0b3JEYXRhfSBmcm9tICcuLi9waW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VzQ29udHJvbGxlciBleHRlbmRzIFBpbUJhc2UuQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENvdW50KGRhdGE6IElQaWVjZVNlbGVjdG9yRGF0YSk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElQaWVjZURhdGEpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIERlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvcGllY2VzYCwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRmluZChkYXRhOiBJUGllY2VTZWxlY3RvckRhdGEpOiBQcm9taXNlPElQYWdlZFJlc3VsdERhdGE8SVBpZWNlRGF0YT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL3BpZWNlcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnlDb2RlKGNvZGU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL3BpZWNlcy9ieS1jb2RlLyR7Y29kZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVwZGF0ZShkYXRhOiBJUGllY2VEYXRhKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2goYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG5cclxuLyogRW5kIG9mIGZpbGUgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
