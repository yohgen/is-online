import { OG } from '!config';

const CONT_STYLE = {
  height: '100%',
  width: '100%',
  padding: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column nowrap',
  backgroundColor: '#000',
  gap: '10px',
  fontFamily: 'Inter',
  fontSize: '40px',
  fontWeight: 700,
  fontStyle: 'normal',
};

const BAR_STYLE = {
  width: '100%',
  flex: 1,
  backgroundColor: '#fff',
};

const TEXT_BAR_STYLE = {
  ...BAR_STYLE,
  // NB: Yoga doesn't support `textAlign` + `display: block`
  // but `justifyContent` works with `display: block` (for some reason)
  // And `lineClamp` requires `display: block` (Yoga be yogging)
  display: 'block',
  alignItems: 'center',
  lineClamp: '1 "..."',
  paddingLeft: '10px',
  paddingRight: '10px',
};

export const template = (text: string) => ({
  type: 'div',
  props: {
    style: CONT_STYLE,
    children: [
      {
        type: 'span',
        props: {
          style: {
            ...BAR_STYLE,
            marginLeft: '20px',
          },
        },
      },
      {
        type: 'span',
        props: {
          style: {
            ...TEXT_BAR_STYLE,
            justifyContent: 'flex-start',
            marginRight: '20px',
          },
          children: OG.header,
        },
      },
      {
        type: 'span',
        props: {
          style: {
            ...TEXT_BAR_STYLE,
            justifyContent: 'flex-end',
            marginLeft: '20px',
          },
          children: text,
        },
      },
      {
        type: 'span',
        props: {
          style: {
            ...BAR_STYLE,
            marginRight: '20px',
          },
        },
      },
    ],
  },
});
