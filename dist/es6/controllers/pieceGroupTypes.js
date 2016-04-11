import { PimBase } from '../pim-base';
export class PieceGroupTypesController extends PimBase.ApiController {
    static Create(data) {
        return this.put(`api/piecegrouptypes`, data);
    }
    static Delete(id) {
        return this.delete(`api/piecegrouptypes`, id);
    }
    static Get(id) {
        return this.get(`api/piecegrouptypes/${id}`);
    }
    static GetList() {
        return this.get(`api/piecegrouptypes`);
    }
    static Update(data) {
        return this.patch(`api/piecegrouptypes`, data);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FTTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGFBQWE7QUFHbkMsK0NBQStDLE9BQU8sQ0FBQyxhQUFhO0lBQ2hFLE9BQWMsTUFBTSxDQUFDLElBQXlCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFjLE1BQU0sQ0FBQyxFQUFVO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFjLEdBQUcsQ0FBQyxFQUFVO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFjLE9BQU87UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBYyxNQUFNLENBQUMsSUFBeUI7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztBQUVMLENBQUM7QUFBQSIsImZpbGUiOiJjb250cm9sbGVycy9waWVjZUdyb3VwVHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgNC84LzIwMTYgMTQ6MjU6MzNcclxuKi9cclxuXHJcbi8qIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiAqL1xyXG5cclxuaW1wb3J0IHtQaW1CYXNlfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBpZWNlR3JvdXBUeXBlRGF0YX0gZnJvbSAnLi4vcGltLWRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlR3JvdXBUeXBlc0NvbnRyb2xsZXIgZXh0ZW5kcyBQaW1CYXNlLkFwaUNvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dChgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL3BpZWNlZ3JvdXB0eXBlcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TGlzdCgpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL3BpZWNlZ3JvdXB0eXBlc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBkYXRlKGRhdGE6IElQaWVjZUdyb3VwVHlwZURhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
