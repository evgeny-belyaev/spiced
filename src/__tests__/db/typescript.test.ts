import firebase from 'firebase'
import { getDatabase } from '../../components/dataProvider'

export default describe("/api/create/[param]", () => {
    test("responds 200 to GET", async () => {
        const db = getDatabase()
        await db.ref("users/asd").set({ hello: "1" })
        const res = await db.ref("users/asd").once('value')

        expect(res.val()).toEqual({ hello: "1" })
    })
})