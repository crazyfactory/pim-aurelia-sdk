var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../pim-base'], function (require, exports, pim_base_1) {
    "use strict";
    var CountriesController = (function (_super) {
        __extends(CountriesController, _super);
        function CountriesController() {
            _super.apply(this, arguments);
        }
        CountriesController.Create = function (data) {
            return this.put("api/countries", data);
        };
        CountriesController.Delete = function (key) {
            return this.delete("api/countries", key);
        };
        CountriesController.Get = function (key) {
            return this.get("api/countries/" + key);
        };
        CountriesController.GetAll = function () {
            return this.get("api/countries");
        };
        CountriesController.Update = function (data) {
            return this.patch("api/countries", data);
        };
        return CountriesController;
    }(pim_base_1.PimBase.ApiController));
    exports.CountriesController = CountriesController;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NvdW50cmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBWUE7UUFBeUMsdUNBQXFCO1FBQTlEO1lBQXlDLDhCQUFxQjtRQXFCOUQsQ0FBQztRQXBCaUIsMEJBQU0sR0FBcEIsVUFBcUIsSUFBa0I7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFYSwwQkFBTSxHQUFwQixVQUFxQixHQUFXO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRWEsdUJBQUcsR0FBakIsVUFBa0IsR0FBVztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsR0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVhLDBCQUFNLEdBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVhLDBCQUFNLEdBQXBCLFVBQXFCLElBQWtCO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUwsMEJBQUM7SUFBRCxDQXJCQSxBQXFCQyxDQXJCd0Msa0JBQU8sQ0FBQyxhQUFhLEdBcUI3RDtJQXJCWSwyQkFBbUIsc0JBcUIvQixDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NvdW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXHJcblxyXG4gICBWZXJzaW9uOiBERVZcclxuICAgRGF0ZTogICA0LzgvMjAxNiAxNDoyNTozM1xyXG4qL1xyXG5cclxuLyogVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuICovXHJcblxyXG5pbXBvcnQge1BpbUJhc2V9IGZyb20gJy4uL3BpbS1iYXNlJztcclxuaW1wb3J0IHtJQ291bnRyeURhdGF9IGZyb20gJy4uL3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElDb3VudHJ5RGF0YSk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoYGFwaS9jb3VudHJpZXNgLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jb3VudHJpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRBbGwoKTogUHJvbWlzZTxJQ291bnRyeURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2NvdW50cmllc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBkYXRlKGRhdGE6IElDb3VudHJ5RGF0YSk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2goYGFwaS9jb3VudHJpZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG5cclxuLyogRW5kIG9mIGZpbGUgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
