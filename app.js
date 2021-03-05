const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = [ 'Adam', 'Adrian', 'Aleksander', 'Aleksy', 'Alwin', 'Anastazy', 'Andrzej', 'Antoni', 'Ariel', 'Arkadiusz', 'Artur', 'August', 'Augustyn', 'Bartłomiej', 'Bartosz', 'Bernard', 'Bogusław', 'Bohdan', 'Bolesław', 'Bruno', 'Cyprian', 'Czesław', 'Damian', 'Daniel', 'Dariusz', 'Dawid', 'Dominik', 'Emil', 'Ernest', 'Eryk', 'Fabian', 'Feliks', 'Filip', 'Franciszek', 'Fryderyk', 'Gabriel', 'Gilbert', 'Gracjan', 'Grzegorz', 'Ignacy', 'Jacek', 'Jakub', 'Jan', 'Janusz', 'Jarosław', 'Jerzy', 'Jędrzej', 'Julian', 'Juliusz', 'Kacper', 'Kajetan', 'Kamil', ' Karol', 'Konrad', 'Kordian', 'Kornel', 'Krystian', 'Krzysztof', 'Ksawery', 'Łucjan', 'Łukasz', 'Maciej', 'Maksymilian', 'Marcelin', 'Marcin', 'Marek', 'Mariusz', 'Mateusz', 'Michał', 'Mikołaj', 'Miłosz', 'Nikodem', 'Oktawian', 'Oliwier', 'Oskar', 'Patryk', 'Paweł', 'Piotr', 'Przemysław', 'Przesław', 'Radosław', 'Rafał', 'Remigiusz', 'Robert', 'Roman', 'Ryszard', 'Sebastian', 'Seweryn', 'Sławomir', 'Stanisław', 'Stefan', 'Sylwester', 'Szczepan', 'Szymon', 'Tobiasz', 'Tomasz', 'Tymon', 'Tymoteusz', 'Witkor', 'Witold', 'Władysław', 'Wocjech', 'Zbigniew' ];

const prefixs = ['Wydaje mi się', 'Mam wrażenie', 'Szczerze powiedziawszy myśle', 'szczerze uważam', 'Na 100% twierdzę', 'Jestem pewien'];


// names[index];
const nameGenerator = () => {
    const indexName = Math.floor(Math.random()* names.length);

  const indexPrefix = Math.floor(Math.random()* prefixs.length);
  //div.textContent = `${prefixs[indexPrefix]} że najlepsze bedzie imie  ${names[indexName]}.`;


    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]} że najlepsze bedzie imie  ${names[indexName]}.`;
}

btn.addEventListener('click', nameGenerator)


















