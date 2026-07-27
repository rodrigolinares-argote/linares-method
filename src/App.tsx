import type { Student, TrainingPlanSummary } from './domain/student';

const students: Student[] = [
  {
    id: 'student-1',
    firstName: 'Camila',
    lastName: 'Linares',
    status: 'active',
    primaryGoal: 'Mejorar composición corporal',
    createdAt: new Date().toISOString(),
  },
];

const plans: TrainingPlanSummary[] = [
  {
    id: 'plan-1',
    studentId: 'student-1',
    name: 'Plan inicial',
    daysPerWeek: 5,
    published: false,
    updatedAt: new Date().toISOString(),
  },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">LM2</div>
        <nav>
          <button className="nav-item active">Resumen</button>
          <button className="nav-item">Alumnos</button>
          <button className="nav-item">Rutinas</button>
          <button className="nav-item">Portal</button>
        </nav>
      </aside>

      <main className="content">
        <header className="page-header">
          <div>
            <span className="eyebrow">LINARES METHOD 2</span>
            <h1>Panel del entrenador</h1>
            <p>Primera base funcional separada de LM1.</p>
          </div>
          <button className="primary-button">Nuevo alumno</button>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <span>Alumnos activos</span>
            <strong>{students.filter((student) => student.status === 'active').length}</strong>
          </article>
          <article className="stat-card">
            <span>Rutinas publicadas</span>
            <strong>{plans.filter((plan) => plan.published).length}</strong>
          </article>
          <article className="stat-card">
            <span>Pendientes de publicar</span>
            <strong>{plans.filter((plan) => !plan.published).length}</strong>
          </article>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">PRIMER NÚCLEO</span>
              <h2>Alumnos</h2>
            </div>
          </div>

          <div className="student-list">
            {students.map((student) => {
              const plan = plans.find((item) => item.studentId === student.id);

              return (
                <article className="student-card" key={student.id}>
                  <div className="avatar">
                    {student.firstName[0]}
                    {student.lastName[0]}
                  </div>
                  <div className="student-main">
                    <h3>{student.firstName} {student.lastName}</h3>
                    <p>{student.primaryGoal ?? 'Sin objetivo definido'}</p>
                  </div>
                  <div className="student-plan">
                    <span>{plan?.name ?? 'Sin rutina'}</span>
                    <small>{plan ? `${plan.daysPerWeek} días por semana` : 'Pendiente'}</small>
                  </div>
                  <span className={plan?.published ? 'badge success' : 'badge warning'}>
                    {plan?.published ? 'Publicada' : 'Borrador'}
                  </span>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
