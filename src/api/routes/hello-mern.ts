import { Router, Request, Response } from 'express'
import reservetionModel from '../../models/reservations'  // necesito mi version
import SpotroomService from '../../services/sportoom' // necesito mi version

import { Container } from "typedi"

const route = Router()

export default (app: Router) => {
  app.use("/", route)

  route.post("/reservation", async (req: Request, res: Response) => {
    try {
      const spotroomServiceInstance = Container.get(SpotroomService)
      const { data } = await spotroomServiceInstance.createReservation(req.body)

      await reservetionModel.create({
        room_id: req.body.room_id,
        room_name: req.body.room_name,
        organisateur: req.body.organisateur,
        mail_organisateur: req.body.mail_organisateur,
        invites: JSON.stringify(req.body.invites),
        commentaires: req.body.commentaires,
        description: req.body.description,
      })
      res.status(200).send("reservation is created.");
    } catch (err) {
      res.status(500).send(err)
    }
  })

  // route.get('/')

}

