'use strict';

module.exports = function (app) {

  if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
    return;
  }

  console.error ('Started creating inital data.');

  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;


  User.create ({
    email: 'admin@admin.com',
    firstName: 'Admin',
    lastName: 'User',
    password: 'admin'
  }, function (err, user) {

    if (err) {
      console.log ('err', err);
    }
    //console.log (user);

    Role.create ({
      name: 'admin'
    }, function (err, role) {
      role.principals.create ({
        principalType: RoleMapping.USER,
        principalId: user.id
      });
    });

  });

  User.create ({
    email: 'user@user.com',
    firstName: 'Normal',
    lastName: 'User',
    password: 'user'
  }, function (err, user) {

    if (err) {
      console.log ('err', err);
    }
    //console.log (user);

    Role.create ({
      name: 'admin'
    }, function (err, role) {
      role.principals.create ({
        principalType: RoleMapping.USER,
        principalId: user.id
      });
    });

  });


  var Category = app.models.Category;
  var Product = app.models.Product;

  Category.create ({
    name: 'Beer'
  }, function (err, category) {
    if (err) {
      console.log ('err', err);
    }
    Product.create ({
      name: 'Draft beer',
      price: '250',
      percentage: '5',
      categoryId: category.id
    }, function (err, data) {
      //console.log (data);
    });
    Product.create ({
      name: 'Bottled beer',
      price: '350',
      percentage: '5',
      categoryId: category.id
    }, function (err, data) {
      //console.log (data);
    });
  });

  Category.create ({
    name: 'Wine'
  }, function (err, category) {
    if (err) {
      console.log ('err', err);
    }
    Product.create ({
      name: 'Red wine',
      price: '350',
      percentage: '12',
      categoryId: category.id
    }, function (err, data) {
      //console.log (data);
    });
    Product.create ({
      name: 'White wine',
      price: '350',
      percentage: '12',
      categoryId: category.id
    }, function (err, data) {
      //console.log (data);
    });
  });

  var Setting = app.models.Setting;

  // App Name
  Setting.create ({
    key: 'appName',
    value: 'Loopback Admin'
  }, function (err, data) {
    if (err) {
      console.log ('err', err);
    }
    console.log (data);
  });

  // Template Theme
  Setting.create ({
    key: 'appTheme',
    value: 'skin-blue'
  }, function (err, data) {
    if (err) {
      console.log ('err', err);
    }
    console.log (data);
  });

  // Layout
  Setting.create ({
    key: 'appLayout',
    value: 'fixed'
  }, function (err, data) {
    if (err) {
      console.log ('err', err);
    }
    console.log (data);
  });

  // Form Layout
  Setting.create ({
    key: 'formLayout',
    value: 'horizontal'
  }, function (err, data) {
    if (err) {
      console.log ('err', err);
    }
    console.log (data);
  });

  // Form Layout
  Setting.create ({
    key: 'formLabelSize',
    value: 3
  }, function (err, data) {
    if (err) {
      console.log ('err', err);
    }
    console.log (data);
  });

  // Form Layout
  Setting.create ({
    key: 'formInputSize',
    value: 9
  }, function (err, data) {
    if (err) {
      console.log ('err', err);
    }
    console.log (data);
  });

};
