import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en getGifs()', () => {
    test('debe devolver un array', async () => {
        const gifs = await getGifs('one punch')
        //console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })


    })
})