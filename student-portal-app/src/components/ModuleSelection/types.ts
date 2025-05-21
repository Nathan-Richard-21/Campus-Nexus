export interface Subject {
  code: string;
  name: string;
  classGroup?: string;
  examMonth?: string;
}

export interface PersonalDetails {
  studentNo: string;
  contact: string;
  name: string;
  id: string;
  programName: string;
  programCode: string;
}

export interface NewSubject extends Subject {
  reasonForChange: string;
}

export interface CancelledSubject extends Subject {
  dateOfCancellation: string;
}

export interface TerminationInfo {
  isBursaryHolder: boolean;
  isEmployerPaying: boolean;
  reason: string;
  otherReason?: string;
}

export interface PersonalDetailsChange {
  newSurname?: string;
  newName?: string;
  newIdNo?: string;
  changeAddress?: boolean;
  postalAddress?: {
    address: string;
    code: string;
    contact: string;
  };
  accountDetails?: {
    details: string;
    code: string;
    contact: string;
  };
  studyAddress?: {
    address: string;
    code: string;
    contact: string;
  };
  nextOfKinAddress?: {
    address: string;
    code: string;
    contact: string;
  };
}

export interface Signatures {
  student: {
    signature: string;
    date: string;
  };
  headOfDepartment?: {
    signature: string;
    date: string;
  };
  librarian?: {
    signature: string;
    date: string;
  };
  computerLab?: {
    signature: string;
    date: string;
  };
  studentFees: {
    signature: string;
    date: string;
  };
}

export interface FormData {
  formType: 'addition' | 'cancellation' | 'termination' | 'personalDetails';
  personalDetails: PersonalDetails;
  newSubjects?: NewSubject[];
  cancelledSubjects?: CancelledSubject[];
  terminationInfo?: TerminationInfo;
  personalDetailsChange?: PersonalDetailsChange;
  signatures?: Signatures;
}
