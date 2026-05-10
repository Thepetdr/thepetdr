export type Species = "dog" | "cat" | "bird" | "rabbit" | "other" | "";

export type ChatMode = "menu" | "booking" | "grooming" | "boarding" | "vaccines"
  | "consultation" | "direct_chat" | "enquiry" | null;

export type ConversationState = {
  mode: ChatMode;
  step: string;
  data: {
    client_name?: string;
    phone?: string;
    pet_name?: string;
    species?: Species;
    breed?: string;
    service?: string;
    main_concern?: string;
    preferred_date?: string;
    preferred_time?: string;
    grooming_size?: string;
    grooming_type?: string;
    notes?: string;
    booking_id?: string;
  };
};