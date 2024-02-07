interface IHelmet {
  title: string;
}

const Helmet = ({ title }: IHelmet) => {
  document.title = 'EGA Men - ' + title;
  return <div>Helmet</div>;
};

export default Helmet;
