import * as z from "zod"
import * as imports from "../null"
import { CompleteRoom, RelatedRoomModel } from "./index"

export const FloorModel = z.object({
  id: z.string(),
  floor_number: z.number().int(),
})

export interface CompleteFloor extends z.infer<typeof FloorModel> {
  Room: CompleteRoom[]
}

/**
 * RelatedFloorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFloorModel: z.ZodSchema<CompleteFloor> = z.lazy(() => FloorModel.extend({
  Room: RelatedRoomModel.array(),
}))
