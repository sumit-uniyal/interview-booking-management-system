import { Schema, Document, models, model } from 'mongoose';

export interface IReservation extends Document {
  reservationid: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address?: string;
  description?: string;
  type: string;
  onlineinterview: boolean;
  startdate: Date;
  enddate?: Date;
  duration?: string;
  interviewtime?: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

const ReservationSchema = new Schema<IReservation>(
  {
    reservationid: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    onlineinterview: {
      type: Boolean,
      required: true,
    },
    startdate: {
      type: Date,
      required: true,
    },
    enddate: {
      type: Date,
    },
    duration: {
      type: String,
      required: false,
    },
    interviewtime: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
      enum: ['pending', 'accepted', 'rejected'],
    },
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reloads (Next.js / serverless)
const Reservation =
  models.Reservation || model<IReservation>('Reservation', ReservationSchema);

export default Reservation;
