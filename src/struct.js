function body(card) {
  return `
  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
      integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <header>
      <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
          <h1 class="display-4 text-center text-white">My Team</h1>
        </div>
      </div>
    </header>
    <section class="row">
      <div class="col-sm-2"></div>
      <div class="card-deck col-sm-8">

            ${card}
    
      
      </div>
      <div class="col-sm-2"></div>
    </section>
  </body>
</html>

  
  `;
}

module.exports = body;
