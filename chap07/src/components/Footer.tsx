/* eslint-disable react/jsx-one-expression-per-line */
const Footer = () => {
  const today: Date = new Date();
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
