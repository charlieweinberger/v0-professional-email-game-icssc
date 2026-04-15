import { create } from 'zustand'

export interface Email {
  id: number
  from: string
  to: string
  subject: string
  body: string
  context: string
}

export const emails: Email[] = [
  {
    id: 1,
    from: "chad.broski@company.com",
    to: "team@company.com",
    subject: "yo meeting tomorrow",
    body: "hey everyone\n\nso like the boss wants us to meet tomorrow at 10 or whatever. bring ur laptops i guess. we gotta talk about that project thats due soon. its kinda important i think.\n\nalso does anyone know where the good coffee is? the stuff in the break room is trash lol\n\nchad",
    context: "All-hands team meeting announcement"
  },
  {
    id: 2,
    from: "karen.complaints@company.com",
    to: "it-support@company.com",
    subject: "computer broken AGAIN!!!!",
    body: "my computer is being SO SLOW today and i CANT work like this. i have a VERY important report due and no one seems to care that my computer is basically a potato.\n\ncan someone come fix this NOW??? its been like 5 whole minutes since i emailed last time\n\nps - the printer on floor 3 is also broken but thats not my problem",
    context: "IT support request"
  },
  {
    id: 3,
    from: "steve.intern@company.com",
    to: "ceo@company.com",
    subject: "hey quick question",
    body: "hey boss!\n\nso i was thinking... can i get a raise? i've been here for like 2 weeks and i think im doing pretty good. also can i have friday off for my friend's birthday party? its gonna be sick.\n\noh and where do i find the stapler?\n\nthanks bro,\nsteve",
    context: "Email to senior leadership"
  },
  {
    id: 4,
    from: "mike.sales@company.com",
    to: "client@bigcorp.com",
    subject: "u gonna buy or what",
    body: "hey,\n\nso ive sent like 3 emails already... are u guys gonna buy this thing or not?? its a really good deal and ur missing out tbh. my manager is bugging me about this so pls respond asap.\n\nif u dont want it just say so lol no hard feelings\n\npeace,\nmike",
    context: "Client follow-up email"
  },
  {
    id: 5,
    from: "jessica.creative@company.com",
    to: "marketing-team@company.com",
    subject: "new logo ideas or whatever",
    body: "ok so i made some logos in paint last night while watching netflix. theyre attached but my wifi was being weird so maybe they didnt send idk.\n\nanyway i think the blue one is cool but do whatever u want. deadline is tomorrow i think? or next week? someone should check.\n\nbtw whos bringing snacks to the meeting",
    context: "Design deliverables to team"
  },
  {
    id: 6,
    from: "bob.finance@company.com",
    to: "all-staff@company.com",
    subject: "money stuff",
    body: "attention everyone:\n\nexpenses r due by friday. if u dont submit them ur not getting paid back sorry not sorry. also stop buying fancy pens we're not made of money.\n\nthe budget meeting got moved to tuesday cuz gary has a dentist thing.\n\n- bob\n\nps dont reply all to this email PLEASE",
    context: "Company-wide financial announcement"
  }
]

interface GameState {
  currentEmail: Email | null
  userResponse: string
  gameStarted: boolean
  gameEnded: boolean
  timeRemaining: number
  setCurrentEmail: (email: Email) => void
  setUserResponse: (response: string) => void
  startGame: () => void
  endGame: () => void
  resetGame: () => void
  decrementTime: () => void
}

export const useGameStore = create<GameState>((set) => ({
  currentEmail: null,
  userResponse: '',
  gameStarted: false,
  gameEnded: false,
  timeRemaining: 60,
  setCurrentEmail: (email) => set({ currentEmail: email }),
  setUserResponse: (response) => set({ userResponse: response }),
  startGame: () => {
    const randomEmail = emails[Math.floor(Math.random() * emails.length)]
    set({ gameStarted: true, gameEnded: false, currentEmail: randomEmail, userResponse: '', timeRemaining: 60 })
  },
  endGame: () => set({ gameEnded: true, gameStarted: false }),
  resetGame: () => set({ currentEmail: null, userResponse: '', gameStarted: false, gameEnded: false, timeRemaining: 60 }),
  decrementTime: () => set((state) => ({ timeRemaining: Math.max(0, state.timeRemaining - 1) }))
}))
