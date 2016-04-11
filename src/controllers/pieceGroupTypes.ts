/*
   The contents of this file are automatically generated

   Version: DEV
   Date:   4/8/2016 14:25:33
*/

/* The contents of this file are automatically generated. */

import {PimBase} from '../pim-base';
import {IPieceGroupTypeData} from '../pim-data';

export class PieceGroupTypesController extends PimBase.ApiController {
    public static Create(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this.put(`api/piecegrouptypes`, data);
    }

    public static Delete(id: number): Promise<boolean> {
        return this.delete(`api/piecegrouptypes`, id);
    }

    public static Get(id: number): Promise<IPieceGroupTypeData> {
        return this.get(`api/piecegrouptypes/${id}`);
    }

    public static GetList(): Promise<IPieceGroupTypeData[]> {
        return this.get(`api/piecegrouptypes`);
    }

    public static Update(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this.patch(`api/piecegrouptypes`, data);
    }

}


/* End of file */

/* End of file */
