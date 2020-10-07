export interface OperatingHours {
  name: string,
  description: string,
  standardHours: StandardHours,
  exceptions: Exception[]
}

interface StandardHours {
  sunday: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string
}

interface Exception {
  name: string,
  startDate: string,
  endDate: string,
  exceptionHours: ExceptionHours
}

interface ExceptionHours {
  sunday: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string
}
