interface CatInfo {
    age: number;
    breed: string;
}

type CatName = 'fidel' | 'kurt';

const cats: Record<CatName, CatInfo> = {
    fidel: { age: 16, breed: 'unknown' },
    kurt: { age: 16, breed: 'garbage' }
};
