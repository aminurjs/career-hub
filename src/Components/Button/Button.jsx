import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div>
      <button className="text-xl text-white font-bold py-3.5 px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg">
        {text}
      </button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
