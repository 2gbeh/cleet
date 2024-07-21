// TODO grrrage n spaces, data model, no congestion
interface Person {
  id: number;
  name: string;
}

interface Vehicle {
  id: number;
  person_id: number;
}

interface Space {
  id: number;
  location: string;
  rate_per_hr: number;
  is_available: boolean;
}

interface Parking {
  id: number;
  vechicle_id: number;
  space_id: number;
  duration: number; // 2h
  created_at: Date;
}

interface Payment {
  vechicle_id: number;
  space_id: number;
}