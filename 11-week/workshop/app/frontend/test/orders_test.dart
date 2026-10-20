import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/main.dart';
import 'package:frontend/store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Mis pedidos informa el error y vuelve a cargar al reintentar', (
    tester,
  ) async {
    SharedPreferences.setMockInitialValues({});
    final store = ShopStore()..simulateOrderFailure = true;
    await store.init();
    await tester.pumpWidget(IceCreamApp(store: store));
    await tester.pumpAndSettle();

    await tester.tap(find.text('Mis pedidos'));
    await tester.pumpAndSettle();
    expect(
      find.text('No pudimos cargar tus pedidos. Intenta de nuevo.'),
      findsOneWidget,
    );

    store.simulateOrderFailure = false;
    await tester.tap(find.text('Reintentar'));
    await tester.pumpAndSettle();
    expect(find.text('Aún no tienes pedidos'), findsOneWidget);
    expect(find.byType(RefreshIndicator), findsOneWidget);
    expect(store.ordersError, isNull);
  });
}
