export default theme => ({
  cardTitle: {
    fontFamily: 'Muli'
  },
  recipeLabel: {
    fontSize: '28px',
    textAlign: 'center'
  },
  card: {
    maxWidth: '400px',
    boxShadow: 'none',
    border: '1px solid #eaebec',
    marginRight: '15px',
    marginBottom: '15px'
  },
  snackbar: {
    margin: theme.spacing(1),
    width: '50%',
    left: '50%',
    display: 'flex',
    alignItems: 'center',
    variant: 'success'
  }
});
