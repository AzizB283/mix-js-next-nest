import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
export declare class NinjasController {
    private readonly ninjaService;
    constructor(ninjaService: NinjasService);
    getNinjas(weapon: 'stars' | 'nunchucks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getOneNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    createNewNinja(createNinjaDto: CreateNinjaDto): {
        id: number;
        name: string;
        weapon: "stars" | "nunchucks";
    };
    updateNinjaById(id: string, updateNinjaDto: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    removeNinja(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
}
