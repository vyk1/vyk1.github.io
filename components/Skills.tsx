import styles from "./Skills.module.css";

export default function Skills({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;

  return (
    <div className={styles.skills}>
      {skills.map((skill) => (
        <span key={skill} className={styles.skill}>
          {skill}
        </span>
      ))}
    </div>
  );
}
