import { MOCK_USERS } from '@/data/mock'
import { useClassesStore } from '@/stores/classes'
import { useCoursStore } from '@/stores/cours'
import { useCreneauxStore } from '@/stores/creneaux'
import { useElevesStore } from '@/stores/eleves'
import { useMatieresStore } from '@/stores/matieres'
import { useNotesStore } from '@/stores/notes'
import { useProfesseursStore } from '@/stores/professeurs'
import { useUsersStore } from '@/stores/users'
import type { Classe, Cours, Creneau, Eleve, Matiere, Note, Professeur, User } from '@/types'

const defaultUsers: User[] = [
  MOCK_USERS.admin,
  MOCK_USERS.professeur,
  MOCK_USERS.eleve,
  { id: '4', nom: 'Lefevre', prenom: 'Claire', email: 'claire.lefevre@edu.fr', role: 'professeur' },
  { id: '5', nom: 'Moreau', prenom: 'Lucas', email: 'lucas.moreau@edu.fr', role: 'professeur' },
  { id: '6', nom: 'Garnier', prenom: 'Emma', email: 'emma.garnier@edu.fr', role: 'professeur' },
  { id: '7', nom: 'Martin', prenom: 'Marie', email: 'marie.martin@edu.fr', role: 'eleve' },
  { id: '8', nom: 'Bernard', prenom: 'Pierre', email: 'pierre.bernard@edu.fr', role: 'eleve' },
  { id: '9', nom: 'Dubois', prenom: 'Sophie', email: 'sophie.dubois@edu.fr', role: 'eleve' },
]

const defaultMatieres: Matiere[] = [
  { id: 'matiere-maths', nom: 'Mathematiques', couleur: '#1976d2' },
  { id: 'matiere-francais', nom: 'Francais', couleur: '#c62828' },
  { id: 'matiere-histoire', nom: 'Histoire-Geographie', couleur: '#ef6c00' },
  { id: 'matiere-svt', nom: 'SVT', couleur: '#2e7d32' },
]

const defaultClasses: Classe[] = [
  { id: 'classe-6a', nom: '6e A', niveau: '6e', anneeScolaire: '2025-2026' },
  { id: 'classe-5b', nom: '5e B', niveau: '5e', anneeScolaire: '2025-2026' },
]

const defaultProfesseurs: Professeur[] = [
  {
    id: 'prof-1',
    nom: MOCK_USERS.professeur.nom,
    prenom: MOCK_USERS.professeur.prenom,
    matiereIds: ['matiere-maths', 'matiere-francais', 'matiere-histoire', 'matiere-svt'],
    userId: MOCK_USERS.professeur.id,
  },
  { id: 'prof-2', nom: 'Lefevre', prenom: 'Claire', matiereIds: ['matiere-francais'], userId: '4' },
  { id: 'prof-3', nom: 'Moreau', prenom: 'Lucas', matiereIds: ['matiere-histoire'], userId: '5' },
  { id: 'prof-4', nom: 'Garnier', prenom: 'Emma', matiereIds: ['matiere-svt'], userId: '6' },
]

const defaultEleves: Eleve[] = [
  {
    id: 'eleve-1',
    nom: MOCK_USERS.eleve.nom,
    prenom: MOCK_USERS.eleve.prenom,
    dateNaissance: '2013-01-01',
    classeId: 'classe-6a',
    userId: MOCK_USERS.eleve.id,
  },
  { id: 'eleve-2', nom: 'Martin', prenom: 'Marie', dateNaissance: '2013-02-02', classeId: 'classe-6a', userId: '7' },
  { id: 'eleve-3', nom: 'Bernard', prenom: 'Pierre', dateNaissance: '2013-03-03', classeId: 'classe-6a', userId: '8' },
  { id: 'eleve-4', nom: 'Dubois', prenom: 'Sophie', dateNaissance: '2013-04-04', classeId: 'classe-6a', userId: '9' },
]

const defaultCours: Cours[] = [
  {
    id: 'cours-1',
    titre: 'Cours de maths',
    description: 'Cours de maths',
    classeId: 'classe-6a',
    matiereId: 'matiere-maths',
    professeurId: 'prof-1',
    dateCreation: '2025-10-15',
  },
  {
    id: 'cours-2',
    titre: 'Cours de francais',
    description: 'Cours de francais',
    classeId: 'classe-6a',
    matiereId: 'matiere-francais',
    professeurId: 'prof-1',
    dateCreation: '2025-10-15',
  },
  {
    id: 'cours-3',
    titre: 'Cours d histoire',
    description: 'Cours d histoire',
    classeId: 'classe-6a',
    matiereId: 'matiere-histoire',
    professeurId: 'prof-1',
    dateCreation: '2025-10-15',
  },
  {
    id: 'cours-4',
    titre: 'Cours de svt',
    description: 'Cours de svt',
    classeId: 'classe-6a',
    matiereId: 'matiere-svt',
    professeurId: 'prof-1',
    dateCreation: '2025-10-15',
  },
]

const defaultCreneaux: Creneau[] = [
  {
    id: 'creneau-1',
    jour: 'lundi',
    heureDebut: '08:00',
    heureFin: '09:00',
    salle: 'A101',
    matiereId: 'matiere-maths',
    professeurId: 'prof-1',
    classeId: 'classe-6a',
  },
  {
    id: 'creneau-2',
    jour: 'lundi',
    heureDebut: '09:00',
    heureFin: '10:00',
    salle: 'A102',
    matiereId: 'matiere-francais',
    professeurId: 'prof-1',
    classeId: 'classe-6a',
  },
  {
    id: 'creneau-3',
    jour: 'lundi',
    heureDebut: '10:00',
    heureFin: '11:00',
    salle: 'A103',
    matiereId: 'matiere-histoire',
    professeurId: 'prof-1',
    classeId: 'classe-6a',
  },
  {
    id: 'creneau-4',
    jour: 'lundi',
    heureDebut: '11:00',
    heureFin: '12:00',
    salle: 'A104',
    matiereId: 'matiere-svt',
    professeurId: 'prof-1',
    classeId: 'classe-6a',
  },
]

const defaultNotes: Note[] = [
  {
    id: 'note-1',
    eleveId: 'eleve-1',
    matiereId: 'matiere-maths',
    professeurId: 'prof-1',
    valeur: 12,
    commentaire: 'Bon travail',
    date: '2025-10-15',
    type: 'devoir',
  },
  {
    id: 'note-2',
    eleveId: 'eleve-1',
    matiereId: 'matiere-francais',
    professeurId: 'prof-2',
    valeur: 14,
    commentaire: 'Travail correct',
    date: '2025-10-15',
    type: 'controle',
  },
  {
    id: 'note-3',
    eleveId: 'eleve-1',
    matiereId: 'matiere-histoire',
    professeurId: 'prof-3',
    valeur: 16,
    commentaire: 'Travail excellent',
    date: '2025-10-15',
    type: 'examen',
  },
  {
    id: 'note-4',
    eleveId: 'eleve-1',
    matiereId: 'matiere-svt',
    professeurId: 'prof-4',
    valeur: 18,
    commentaire: 'Travail tres excellent',
    date: '2025-10-15',
    type: 'controle',
  },
  {
    id: 'note-5',
    eleveId: 'eleve-1',
    matiereId: 'matiere-maths',
    professeurId: 'prof-1',
    valeur: 10,
    commentaire: 'Travail a ameliorer',
    date: '2025-10-15',
    type: 'examen',
  },
  {
    id: 'note-6',
    eleveId: 'eleve-1',
    matiereId: 'matiere-francais',
    professeurId: 'prof-2',
    valeur: 12,
    commentaire: 'Travail correct',
    date: '2025-10-15',
    type: 'devoir',
  },
]

const seedIfEmpty = <T>(target: T[], values: T[]): void => {
  if (target.length === 0) target.push(...values)
}

export function seedDatabase(): void {
  const userStore = useUsersStore()
  const classes = useClassesStore()
  const matieres = useMatieresStore()
  const cours = useCoursStore()
  const creneaux = useCreneauxStore()
  const eleves = useElevesStore()
  const notes = useNotesStore()
  const professeurs = useProfesseursStore()

  seedIfEmpty(userStore.users, defaultUsers)
  seedIfEmpty(matieres.matieres, defaultMatieres)
  seedIfEmpty(classes.classes, defaultClasses)
  seedIfEmpty(professeurs.professeurs, defaultProfesseurs)
  seedIfEmpty(eleves.eleves, defaultEleves)
  seedIfEmpty(cours.cours, defaultCours)
  seedIfEmpty(creneaux.creneaux, defaultCreneaux)
  seedIfEmpty(notes.notes, defaultNotes)
}
