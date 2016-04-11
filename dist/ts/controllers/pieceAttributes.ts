/*
   The contents of this file are automatically generated

   Version: DEV
   Date:   4/8/2016 14:25:33
*/

/* The contents of this file are automatically generated. */

import {PimBase} from '../pim-base';
import {IPieceAttributeData} from '../pim-data';

export class PieceAttributesController extends PimBase.ApiController {
    public static AddValue(key: string, value: string): Promise<IPieceAttributeData> {
        return this.put(`api/pieceattributes/${key}/values`, value);
    }

    public static DeleteValue(key: string, value: string): Promise<boolean> {
        return this.delete(`api/pieceattributes/${key}/values`, value);
    }

    public static Get(key: string): Promise<IPieceAttributeData> {
        return this.get(`api/pieceattributes/${key}`);
    }

    public static GetAll(): Promise<IPieceAttributeData[]> {
        return this.get(`api/pieceattributes`);
    }

    public static Update(key: string, data: IPieceAttributeData): Promise<IPieceAttributeData> {
        return this.patch(`api/pieceattributes/${key}`, data);
    }

}


/* End of file */

/* End of file */
