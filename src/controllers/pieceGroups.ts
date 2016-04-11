/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 11:04:13
*/

import {ApiController} from '../pim-base';
import {IPieceGroupData} from 'pim-data';

export class PieceGroupsController extends ApiController {
    public static Create(data: IPieceGroupData): Promise<IPieceGroupData> {
        return this.put(`api/piecegroups`, data);
    }

    public static Delete(id: number): Promise<boolean> {
        return this.delete(`api/piecegroups`, null);
    }

    public static Get(id: number): Promise<IPieceGroupData> {
        return this.get(`api/piecegroups/${id}`);
    }

    public static GetAll(): Promise<IPieceGroupData[]> {
        return this.get(`api/piecegroups`);
    }

    public static GetByCode(code: string): Promise<IPieceGroupData> {
        return this.get(`api/piecegroups/by-code/${code}`);
    }

    public static Update(data: IPieceGroupData): Promise<IPieceGroupData> {
        return this.patch(`api/piecegroups`, data);
    }

}

/* End of file */
