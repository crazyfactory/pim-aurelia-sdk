/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 10:55:00
*/

import {ApiController} from '../pim-base';
import {IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';

export class PiecesController extends ApiController {
    public static Count(data: IPieceSelectorData): Promise<number> {
        return this.head(`api/pieces`, data);
    }

    public static Create(data: IPieceData): Promise<IPieceData> {
        return this.put(`api/pieces`, data);
    }

    public static Delete(id: number): Promise<IPieceData> {
        return this.delete(`api/pieces`, id);
    }

    public static Find(data: IPieceSelectorData): Promise<IPagedResultData<IPieceData>> {
        return this.post(`api/pieces`, data);
    }

    public static Get(id: number): Promise<IPieceData> {
        return this.get(`api/pieces/${id}`);
    }

    public static GetByCode(code: string): Promise<IPieceData> {
        return this.get(`api/pieces/by-code/${code}`);
    }

    public static Update(data: IPieceData): Promise<IPieceData> {
        return this.patch(`api/pieces`, data);
    }

}

/* End of file */
