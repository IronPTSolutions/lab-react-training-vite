const Greetings = ({ lang, children }) => {
  const renderGreeting = () => {
    let greeting = '';

    switch (lang) {
      case 'de':
        greeting = 'Hallo'
        break;
      case 'fr':
        greeting = 'Bonjour'
        break;
      case 'es':
        greeting = 'Hola'
        break;
      case 'en':
        greeting = 'Hello'
        break;
    
      default:
        greeting = 'Hola'
        break;
    }
    return greeting;
  }

  return (
    <div className="Greetings box-border">
      {renderGreeting()} {children}
    </div>
  )
}

export default Greetings;