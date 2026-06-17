export type User = {
  badgeId: string
  firstName: string
  lastName: string
}

export const MOCK_USERS: User[] = [
  { badgeId: '0000022647', firstName: 'Giorgio', lastName: 'Toffoli' },
]

export type Wheelchair = {
  id: string
  name: string
  model: string
  modelNumber: string
  assignedArea: string
}

export const MOCK_WHEELCHAIRS: Wheelchair[] = [
  {
    id: 'WC001',
    name: 'Hospital Wheelchair',
    model: 'Standard Manual',
    modelNumber: 'H-200',
    assignedArea: 'AR001',
  },
]

export const MOCK_WRONG_AREA = 'ER West'
