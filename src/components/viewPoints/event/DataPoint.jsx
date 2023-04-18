import style from './dataPoint.module.css';

export default function DataPoint({
  competition,
  givenBy,
  house,
  name,
  otherInfo,
  points,
  grade,
  created,
  gender,
}) {
  console.log(created.toDate().toDateString());
  return (
    <>
      <div className={style.container}>
        <div className={style.competition}>Competition:{competition}</div>
        <div className={style.givenBy}>Points given by:{givenBy}</div>
        <div className={style.house}>House:{house}</div>
        <div className={style.name}>Name:{name}</div>
        <div className={style.other}>Other Information:{otherInfo}</div>
        <div className={style.points}>Points:{points}</div>
        <div className={style.grade}>Grade:{grade}</div>
        <div className={style.created}>
          Date:{created.toDate().toDateString()}
        </div>
        <div className={style.gender}>Gender:{gender}</div>
      </div>
    </>
  );
}
