import ContBoxWrapper from './ContBoxWrapper';

const ContBox = (props) => {
  return (
    <div className='cont-box' id={props.type}>
      <ContBoxWrapper {...props} />
    </div>
  );
};

export default ContBox;
