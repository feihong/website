<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" /><title>Feihong Hsu</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.4/foundation.min.css">
  <style>
  ul {
    margin-left: 0;
    list-style-type: none;
  }
  </style>
</head>
<body>
  <div class="row">
    <div class="large-8 large-centered columns">
{{! body }}
    </div>
  </div>
% if add_contact_info:
  <script>
    var ul = document.getElementsByTagName('ul')[0];
    var li;
    li = document.createElement('li');
    li.innerHTML = '{{! email }}';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerHTML = '{{! phone }}';
    ul.appendChild(li);
  </script>
% end
</body>
</html>
