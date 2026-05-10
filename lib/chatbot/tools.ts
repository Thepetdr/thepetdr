export const CHATBOT_TOOLS = [
  {
    type: "function",
    function: {
      name: "create_booking",
      description: "Create a booking request for a pet service appointment",
      strict: true,
      parameters: {
        type: "object",
        required: ["client_name","phone","pet_name","species","breed","service","main_concern","preferred_date","preferred_time","is_new_client","notes"],
        additionalProperties: false,
        properties: {
          client_name: { type: "string" },
          phone: { type: "string" },
          pet_name: { type: "string" },
          species: { type: "string" },
          breed: { type: "string" },
          service: { type: "string" },
          main_concern: { type: "string" },
          preferred_date: { type: "string", description: "YYYY-MM-DD" },
          preferred_time: { type: "string", description: "HH:MM 24hr" },
          is_new_client: { type: "boolean" },
          notes: { type: "string" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "send_internal_alert",
      description: "Generate an internal booking request alert for clinic staff",
      strict: true,
      parameters: {
        type: "object",
        required: ["alert_type","client_name","phone","pet_name","species","breed","service","main_concern","preferred_date","preferred_time","priority","notes"],
        additionalProperties: false,
        properties: {
          alert_type: { type: "string", enum: ["booking_request"] },
          client_name: { type: "string" },
          phone: { type: "string" },
          pet_name: { type: "string" },
          species: { type: "string", enum: ["dog","cat","bird","rabbit","other",""] },
          breed: { type: "string" },
          service: { type: "string" },
          main_concern: { type: "string" },
          preferred_date: { type: "string" },
          preferred_time: { type: "string" },
          priority: { type: "string", enum: ["normal","high","urgent"] },
          notes: { type: "string" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "save_lead",
      description: "Save a new lead contact",
      strict: true,
      parameters: {
        type: "object",
        required: ["name","phone","interest","notes","follow_up_date"],
        additionalProperties: false,
        properties: {
          name: { type: "string" },
          phone: { type: "string" },
          interest: { type: "string", enum: ["grooming","consult","boarding"] },
          notes: { type: "string" },
          follow_up_date: { type: "string" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "new_lead",
      description: "Capture a new lead from WhatsApp",
      strict: true,
      parameters: {
        type: "object",
        required: ["number","service_interested_in","source"],
        additionalProperties: false,
        properties: {
          number: { type: "string" },
          service_interested_in: { type: "string" },
          source: { type: "string", enum: ["WhatsApp"] },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "urgent_case",
      description: "Register an urgent/emergency case",
      strict: true,
      parameters: {
        type: "object",
        required: ["name","phone","pet_name","symptoms","eta"],
        additionalProperties: false,
        properties: {
          name: { type: "string" },
          phone: { type: "string" },
          pet_name: { type: "string" },
          symptoms: { type: "string" },
          eta: { type: "string" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "parse_appointment_datetime",
      description: "Parse and normalize natural language date/time into standard formats",
      strict: true,
      parameters: {
        type: "object",
        required: ["preferred_date","preferred_time"],
        additionalProperties: false,
        properties: {
          preferred_date: { type: "string", description: "YYYY-MM-DD" },
          preferred_time: { type: "string", description: "HH:MM 24hr" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "check_boarding_dates",
      description: "Check available dates for boarding",
      strict: true,
      parameters: {
        type: "object",
        required: ["start_date","end_date","location","pet_type","number_of_pets"],
        additionalProperties: false,
        properties: {
          start_date: { type: "string" },
          end_date: { type: "string" },
          location: { type: "string" },
          pet_type: { type: "string" },
          number_of_pets: { type: "integer" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "request_quote",
      description: "Request a service quote",
      strict: true,
      parameters: {
        type: "object",
        required: ["client_name","phone","service","pet_type","size","notes"],
        additionalProperties: false,
        properties: {
          client_name: { type: "string" },
          phone: { type: "string" },
          service: { type: "string" },
          pet_type: { type: "string" },
          size: { type: "string" },
          notes: { type: "string" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "call_back_request",
      description: "Submit a callback request",
      strict: true,
      parameters: {
        type: "object",
        required: ["name","phone","reason"],
        additionalProperties: false,
        properties: {
          name: { type: "string" },
          phone: { type: "string" },
          reason: { type: "string", enum: ["lab results","follow up","medication","complaint"] },
        },
      },
    },
  },
];