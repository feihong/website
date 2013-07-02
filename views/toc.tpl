<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" /><title>Feihong Hsu</title>
  <link rel="stylesheet" href="static/css/foundation.min.css">
</head>
<body>
  <div class="row">
    <div class="large-8 large-centered columns">
      <h1>Files</h1>

      <ul>
      % for file in files:
        <li>
          <a href="static/{{ file }}">{{ file }}</a>
        </li>
      % end
      </ul>
    </div>
  </div>
</body>
</html>
